import { useQuery } from "react-query";

const getRepoData = () => {
  const { data } = useQuery("repoData", () =>
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
      (res) => res.json()
    )
  );
  return data;
};
