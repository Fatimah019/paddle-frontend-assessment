import React, { useEffect } from "react";
import styled from "styled-components";
import { getUser, fetchGithubUser } from "../../../store/reducer/githubUsers";
import { useSelector, useDispatch } from "react-redux";
import ListCard from "../../uis/githubrepocard";
import CustomLoader from "../../common/loader";
import Search from "../../search";

const GithubRepos = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  useEffect(() => {
    const fetchRepos = async () => {
      await dispatch(fetchGithubUser("created:>2021-08-13", "stars", "desc"));
    };
    fetchRepos();
  }, [dispatch]);

  return (
    <GithubContainer>
      <CustomLoader visible={user?.loading} />

      <GithubHeader>
        <h1>Trending Repositories</h1>
        <Search />
      </GithubHeader>
      <ItemList>
        {user?.user?.items?.map((item) => (
          <ListCard
            key={item.id}
            list_card_image={item?.owner?.avatar_url}
            list_card_heading={item?.full_name}
            list_card_issues_count={item?.open_issues_count}
            list_card_star_count={item?.stargazers_count}
            list_card_description={item?.description || ""}
            list_card_submission_date={item?.updated_at}
            list_card_owner_name={item?.owner?.login}
          />
        ))}
      </ItemList>
    </GithubContainer>
  );
};

export default GithubRepos;

const GithubContainer = styled.div`
  margin: 0;
`;

const GithubHeader = styled.header`
  text-align: center;
  background: gray;
  padding: 2rem 0rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;
const ItemList = styled.ul`
  margin: 12rem auto;
  padding: 0;
  width: 80%;
`;
