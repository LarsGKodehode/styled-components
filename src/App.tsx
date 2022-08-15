// CSS
import styled from 'styled-components';
import './App.css';

// Components
import Navbar from './assets/components/Navbar/Navbar'

const StyledSection = styled.section`
margin: 0 2em;
padding: 2em;
background-color: #6c30bfd8;
`

const StyledH1 = styled.h1`
color: black;
`

const StyledParagraph = styled.p`
color: black;
`

function App() {
  return (
    <main className='App'>
      <Navbar />

      <StyledSection>

        <StyledH1>My Styled Test Text</StyledH1>

        <StyledParagraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda dignissimos provident sint quae, nihil voluptatum labore itaque odio facere porro, deleniti ex. Obcaecati natus, illum hic iste aliquam repellat? Mollitia.</StyledParagraph>

      </StyledSection>
    </main>
  );
};

export default App;