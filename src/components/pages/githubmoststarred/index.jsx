import React, { useEffect } from "react";
import styled from "styled-components";
import { getUser, fetchGithubUser } from "../../../store/reducer/githubUsers";
import { useSelector, useDispatch } from "react-redux";

const GithubRepos = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  useEffect(() => {
    const fetchRepos = async () => {
      await dispatch(fetchGithubUser("q=stars:%3E1", "stars"));
    };
    fetchRepos();
  });

  console.log(user.items);
  return (
    <GithubContainer>
      <GithubHeader>
        <h1>Most Starred Repositories on github</h1>

        <ItemList>
          {/* {user.user.map((item) => (
            <li key={item.id}>{item.owner.login}</li>
          ))} */}
        </ItemList>
      </GithubHeader>
    </GithubContainer>
  );
};

export default GithubRepos;

const GithubContainer = styled.div`
  width: 80%;
  margin: auto;
`;

const GithubHeader = styled.header`
  text-align: center;
  margin: 3rem 0rem;
`;
const ItemList = styled.ul``;
