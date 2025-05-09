import axios from "axios";
import { useState, useEffect } from "react";
import { ContentBody, SummaryCard, SummaryContainer, SummaryContent } from "./styles"
import GitHubIcon from '@mui/icons-material/GitHub';
import { Issue } from "../../app/model/Issue";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { formatDistanceToNow } from "date-fns";
import { ptBR } from 'date-fns/locale';
import remarkGfm from 'remark-gfm'
import Markdown from 'react-markdown'
import 'github-markdown-css/github-markdown.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { NavLink } from "react-router-dom";
import LaunchIcon from '@mui/icons-material/Launch';

type SummaryDetailsProps = {
  number: string
}


export function SummaryDetails(props: SummaryDetailsProps) {
  const {number} = props
  const [data, setData] = useState<Issue | null>(null);

  useEffect(() => {
    const fetchIssue = async () => {
      try {
        const response = await axios.get<Issue>(`https://api.github.com/repos/viktor-lima/Github-Blog/issues/${number}`);
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do GitHub:', error);
      }
    };

    fetchIssue();
  }, [data, number]);  

  const markdow = data?.body;

  if (!data) return <p>Carregando...</p>;
  return (
    <SummaryContainer>
      <SummaryCard>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <NavLink to={'/'} id="back">
            <div>
              <ArrowBackIosIcon id="arrowBack" />
              <p style={{fontSize: '1rem'}}>voltar</p> 
            </div>
          </NavLink>
          <a href={data.html_url} target="_blank" rel="noopener noreferrer">
            <GitHubIcon style={{ fontSize: 32, color: '#6b6aa9' }} />
          </a>
        </div>
        <SummaryContent>
          <div>
            <h1>{data.title}</h1>
            <div id="icons">
              {data.user && (
                <a href="#">
                  <GitHubIcon fontSize="small" />
                  <div style={{ fontSize: 12 }}>{data.user.login}</div>
                </a>
              )}
              <a>
                <CalendarMonthIcon fontSize="small" />
                <div style={{ fontSize: 12 }}>
                  <span>
                    {formatDistanceToNow(data.created_at, {
                      addSuffix: true,
                      locale: ptBR
                    })}
                  </span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/joaoviktorlima" target="_blank" rel="noopener noreferrer">
                <ChatBubbleOutlineIcon fontSize="small" />
                <div style={{ fontSize: 12 }}>{data.comments}</div>
              </a>
            </div>
          </div>
        </SummaryContent>
      </SummaryCard>
        <ContentBody className="markdown-body">
          <Markdown remarkPlugins={[remarkGfm]}>
            {markdow?.toString()}
          </Markdown>
        </ContentBody>
    </SummaryContainer>
  )
}
