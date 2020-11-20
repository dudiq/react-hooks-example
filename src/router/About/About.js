import Icon from '@/ui-kit/Icon';
import Header from '@/ui-kit/AppHeader';
import UserProfile from '@/modules/UserProfile';

function About() {
  return (
    <div className="about">
      <Header />
      <div className="about-header">
        <Icon
          name={Icon.names.logo}
          className="App-logo"
          width={40}
          height={40}
        />
        {process.env.REACT_APP_NOT_SECRET_CODE}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <UserProfile/>
    </div>
  );
}

export default About;
