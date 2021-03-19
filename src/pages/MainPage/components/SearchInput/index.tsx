import React, { useContext, useState } from 'react';
import { FaArrowRight, FaCircleNotch } from 'react-icons/fa';
import { Container } from './styles';
import { ThemeContext } from 'styled-components';
import { SearchInputProps } from './types';
import { findGithubUser } from './functions';
import { useHistory } from 'react-router-dom';
import { AppContext } from '~/App';

function SearchInput(props: SearchInputProps) {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();
  const { body } = useContext(ThemeContext);
  const { language } = useContext(AppContext);

  function submit() {
    findGithubUser(inputValue, setLoading, history);
  }

  return (
    <Container className="search-input-container">
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder={language.mainPage.findUserInputPlaceholder}
        className="search-input"
        id="search-input"
        onKeyPress={(press) => {
          if (press.code === 'Enter') {
            submit();
          }
        }}
      />

      <button
        onClick={submit}
        disabled={loading}
        className="search-input-submit-button"
        id="search-input-submit-button"
      >
        {loading ? (
          <FaCircleNotch
            className="search-input-loading-svg"
            size={20}
            color={body.defaultText}
          />
        ) : (
          <FaArrowRight size={16} color={body.defaultText} />
        )}
      </button>
    </Container>
  );
}

export default SearchInput;
