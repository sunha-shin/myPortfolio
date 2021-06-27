import React from 'react'
import styled from 'styled-components';
import Tags from "./Tags";

const WorkItem = ({item}) => {

    const {
        title,
        description,
        thumbnail,
        tags,
        url
    } = item;


    return (
        <Container>
            <Thumb>
                <a href={url}>
                    <img src={thumbnail} alt=""/>
                </a>
            </Thumb>
            <Desc>
                <h3><a href={url}>{title}</a></h3>
                <p>{description}</p>
                <Tags data={tags}/>
            </Desc>
        </Container>
    )
}

const Container = styled.div`
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
`;

const Thumb = styled.div`

`;

const Desc = styled.div`
  padding: 18px;

  h3 {
    a {
      display: block;
      color: #333;
      font-size: 20px;
      margin-bottom: 8px;
    }    
  }

  p {
    font-size: 15px;
    color: #777;
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;

export default WorkItem;