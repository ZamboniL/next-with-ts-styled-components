import { GetServerSideProps } from 'next';

const Home = () => {
  return <h1>Hello World.</h1>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

export default Home;
