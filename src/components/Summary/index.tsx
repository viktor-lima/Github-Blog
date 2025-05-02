import axios from "axios";
import { useState, useEffect } from "react";
import { SummaryCard, SummaryContainer, SummaryContent } from "./styles"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { GitHubUser } from "../../app/model/User";




export function Summary() {
  const [userData, setUserData] = useState<GitHubUser | null>(null);

  useEffect(() => {
    const fetchGitHubUser = async () => {
      try {
        const response = await axios.get<GitHubUser>('https://api.github.com/users/viktor-lima');
        setUserData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do GitHub:', error);
      }
    };

    fetchGitHubUser();
  }, []);  

  if (!userData) return <p>Carregando...</p>;
  console.log(userData.login);
  
  
  return (
    <SummaryContainer>
      <SummaryCard>
        <SummaryContent>
          <img src={userData.avatar_url} alt="Imagem do perfil do GitHub" />
          <div>
            <h1>{userData.name}</h1>
            <p>{userData.bio}</p>
            <div id="icons">
              <a href="https://www.linkedin.com/in/joaoviktorlima" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon style={{ fontSize: 32, color: '#6b6aa9' }} />
                <div style={{ fontSize: 12 }}>João Lima</div>
              </a>

              {userData.company && (
                <a href="#" title={userData.company}>
                  <BusinessIcon style={{ fontSize: 32, color: '#6b6aa9' }} />
                  <div style={{ fontSize: 12 }}>{userData.company}</div>
                </a>
              )}

              <a href={`${userData.html_url}?tab=followers`} target="_blank" rel="noopener noreferrer">
                <PeopleAltIcon style={{ fontSize: 32, color: '#6b6aa9' }} />
                <div style={{ fontSize: 12 }}>{userData.followers} seguidores</div>
              </a>
            </div>
          </div>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            <GitHubIcon style={{ fontSize: 32, color: '#6b6aa9' }} />
          </a>
        </SummaryContent>
      </SummaryCard>
    </SummaryContainer>
  )
}