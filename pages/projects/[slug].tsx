import { GetStaticProps, GetStaticPaths } from 'next';

const ProjectDetailPage = () => {
  return <div>CONTENT</div>;
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default ProjectDetailPage;
