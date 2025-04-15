import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";

import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";


const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormsInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {

  const { 
    register, 
    handleSubmit, 
    // formState: {}
   } = useForm<SearchFormsInputs>({
    resolver: zodResolver(searchFormSchema)
  });

  async function handleSearchTransaction() {
    // await fetchTransactions(data.query)
  }


  return (
    <div>
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
          <div style={{width: '100%', marginTop: '5rem'}}>
            <div id="published">
              <strong>Publicações</strong>
              <span>{`${6} publicações`}</span>
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