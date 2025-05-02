import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";

import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { IssueContext } from "../../../components/context/IssueContext";
import { useContext, useEffect } from "react";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormsInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {

  const { fetchIssues, issues } = useContext(IssueContext);

 
  const { 
    register, 
    watch
   } = useForm<SearchFormsInputs>({
    resolver: zodResolver(searchFormSchema)
  });
  const query = watch('query');

  useEffect(() => {
    fetchIssues(query || '');
  }, [query]);

  return (
    <div>
        <SearchFormContainer>
          <div style={{width: '100%', marginTop: '5rem'}}>
            <div id="published">
              <strong>Publicações</strong>
              <span>{`${issues.length} publicações`}</span>
            </div>
            <input 
              type="text" 
              placeholder="Buscar Conteúdo" 
              {...register('query')}
            />
          </div>
        </SearchFormContainer>
    </div>   
  )
}