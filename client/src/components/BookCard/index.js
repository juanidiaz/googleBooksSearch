import React from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';
import Button from "../../components/Button"


const BookCard = (props) => {
  return (
    <div className='mt-3'>
      <Card>
        <CardHeader tag="h3">
          <a href={props.link}>{props.title} target='-none'</a>
        </CardHeader>
        <CardBody>
          <CardTitle>Author: {props.author}</CardTitle>
          <CardText>
            <a href={props.link} target='-none'><img src={props.image} /></a>
          </CardText>
        </CardBody>
        <CardFooter className="text-muted">
          <div onClick={() => {
            console.log(`deleting ${props.id}`);
            props.deleteBook(props._id);
          }}>
            <Button
              text='Delete book'
              color='danger'
            />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BookCard;