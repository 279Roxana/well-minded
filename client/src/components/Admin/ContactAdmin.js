import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'
import Message from "./Message"
import Pagination from "react-js-pagination";
import "../../css/contactAdmin.css"
import "../../css/pagination.css"
import "bootstrap/dist/css/bootstrap.min.css";
import domain from "../../config";
import { Container, Row, Col } from "react-bootstrap"

const Messages = ({ contactMessages, setContactMessages}) => {

   
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(5);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const sortedMessages = contactMessages.slice().sort((a, b) => b.date - a.date).reverse()
    const currentPosts = sortedMessages.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (number) => setCurrentPage(number);

    
    
    useEffect( ()=>{
        fetch(domain + "/api/contact/messages")
        
        .then((res) => res.json())
        .then((data) => setContactMessages(data))
    }, [contactMessages]
    )
    

    return (
        <Container className="contactAdmin" >
            <Row>
                <Col>
                <h2 className="messages-title mt-3">Contact Messages</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table responsive bordered hover className="messagesTable mt-5" >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Website</th>
                                <th>Comment</th>
                            </tr>
                        </thead>

                        {currentPosts.map(message =>
                            <tbody className="row-elements">
                                <Message message={message} />
                            </tbody>
                        )}

               
                    </Table>
                    <div className="pagination text-centre">
                    <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={postsPerPage}
                        totalItemsCount={contactMessages.length}
                        pageRangeDisplayed={5}
                        onChange={paginate}
                        prevPageText="prev"
                        nextPageText="next"
                        firstPageText="first"
                        lastPageText="last"
                    />
                    </div>
                    </Col>
            </ Row>
        </ Container>
    )
}

export default Messages;