import { createContext, useState, ReactNode } from "react";
import axios from "axios";
import { Issue } from "../../app/model/Issue";

interface IssueContextType {
  issues: Issue[];
  setIssues: React.Dispatch<React.SetStateAction<Issue[]>>;
  fetchIssues: (query: string) => Promise<void>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const IssueContext = createContext({} as IssueContextType);

type IssueProviderProps = {
  children: ReactNode;
};

export const IssueProvider = ({ children }: IssueProviderProps) => {
  const [issues, setIssues] = useState<Issue[]>([]);

  const fetchIssues = async (query: string) => {
    const url = query
      ? "https://api.github.com/search/issues"
      : "https://api.github.com/repos/viktor-lima/Github-Blog/issues";
  
    const response = await axios.get(url, {
      params: query
        ? { q: `repo:viktor-lima/Github-Blog type:issue ${query}` }
        : {},
    });
  
    const results = query ? response.data.items : response.data;
    setIssues(results);
  };

  return (
    <IssueContext.Provider value={{ issues, setIssues, fetchIssues }}>
      {children}
    </IssueContext.Provider>
  );
};
