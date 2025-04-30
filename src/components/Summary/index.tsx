import axios from "axios";
import { useState, useEffect } from "react";
import { SummaryCard, SummaryContainer, SummaryContent } from "./styles"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


// types/GitHubUser.ts

export interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string | null;
  company: string | null;
  blog: string;
  location: string;
  email: string | null;
  hireable: boolean | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}


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