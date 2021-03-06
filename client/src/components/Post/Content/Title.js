import React from 'react';
import styled from 'styled-components/macro';
import { link } from '../../shared/helpers';

const Wrapper = styled.div`
  display: flex;

  a {
    ${link({ underline: true })};

    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 15px;
    line-height: 20px;
    font-weight: 500;
    text-decoration: none;
    color: ${props => props.theme.normalText};
  }
`;

const PostContentTitle = props => (
  <Wrapper>
    <a href={props.url}>{props.title}</a>
  </Wrapper>
);

export default PostContentTitle;
