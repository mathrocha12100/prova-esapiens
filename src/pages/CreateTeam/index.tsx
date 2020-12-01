import React, { useContext } from 'react';
import { AppContext } from '~/App';
import Card from '@components/Card';
import Layout from '@layouts/Common';

import { Form } from '@unform/web';
import { TextInput, TextArea, Radio } from '@components/UnformInputs';

import { Container } from './styles';

const CreateTeam: React.FC = () => {
  const { language } = useContext(AppContext);
  
  return (
    <Layout>
      <Card  
      header={{
        title: language.content.createTeamTitle,
      }}
      >
        <Container>
          <header className="containerHeader">
            <strong>{language.content.informations.form.title}</strong>
          </header>
            <Form onSubmit={(data) => console.log(data)}>
          <main className="containerContent">
              <div>
              <TextInput placeholder="teste" label={language.content.informations.form.fields.teamName} name="teamName" />
              <TextArea rows={8} placeholder="teste" label={language.content.informations.form.fields.description} name="description" />
              </div>
              <div>
              <TextInput  placeholder="teste" label={language.content.informations.form.fields.description} name="dwa" />
              <Radio
                label="radio input"
                name="dwadwa"
                options={[
                  {
                    id: 1,
                    label:'dwawd',
                  },
                  {
                    id: 2,
                    label:'dsadwadwadawdawqd',
                  },
                ]}
              />
              </div>
          </main>
          <button type="submit">dadwaa</button>
            </Form>
        </Container>
      </Card>
    </Layout>
  ); 
}

export default CreateTeam;