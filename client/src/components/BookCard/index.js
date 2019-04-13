import React from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';
import Button from "../../components/Button"
import { Link } from "react-router-dom";


const BookCard = (props) => {
  return (
    <div className='mt-3'>
      <Card>
        {/* <CardHeader tag="h3"><Link to={"/db/books/" + props._id}>{props.title}</Link></CardHeader> */}
        <CardHeader tag="h3"><Link to={props.link}>{props.title}</Link></CardHeader>
        <CardBody>
          <CardTitle>Author: {props.author}</CardTitle>
          <CardText>
            {/* <p>Description: {props.description}</p> */}
            <a href={props.link} target='-none'><img src={props.image} /></a>
          </CardText>
          {/* <Button
            text='Get the book!'
            color='success'
          />
          <Button onClick={() => {
            props.deleteBook(props._id);
            console.log(`deleting ${props.id}`);
          }}
            text='Delete book'
            color='danger'
          /> */}
        </CardBody>
        <CardFooter className="text-muted">
          <Button
            text='Get the book!'
            color='success'
          />
          <Button onClick={() => {
            props.deleteBook(props._id);
            console.log(`deleting ${props.id}`);
          }}
            text='Delete book'
            color='danger'
          />

        </CardFooter>
      </Card>
    </div>
  );
};

export default BookCard;

/*<ListItem key={book._id}>
  <Link to={"/db/books/" + book._id}>
    <strong>
      {book.title} by {book.author}
    </strong>
  </Link>
  <DeleteBtn onClick={() => this.deleteBook(book._id)} />
</ListItem>*/

