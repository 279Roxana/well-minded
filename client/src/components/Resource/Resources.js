import React, { useState } from "react";
import Allresources from "./Allresources";
import InputResSearch from "./InputResSearch";
import Pagination from "react-js-pagination";
import "../../css/pagination.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const Resources = ({ resources, setResources, isAdmin }) => {
  
  const [searchResource, setSearchResource] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(5);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = resources.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (number) => setCurrentPage(number);

 

  const removeResourceById = (id) => {
    setResources(resources.filter(({ _id }) => _id !== id));
  };

  const updateResource = (resource) => {
    setResources(
      resources.map((existingResource) =>
        existingResource._id === resource._id ? resource : existingResource
      )
    );
  };

  const filteredData = currentPosts.filter(
    (resource) =>
      resource.name.toLowerCase().includes(searchResource) ||
      resource.description.toLowerCase().includes(searchResource)
  );
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h3 className="mt-3">Find an resource</h3>
        </Col>
      </Row>
      <Row>
        <Col className="mb-5">
          <InputResSearch
            searchResource={searchResource}
            setSearchResource={setSearchResource}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          {filteredData.map((resource) => (
            <Allresources
              key={resource._id}
              resource={resource}
              removeResourceById={removeResourceById}
              updateResource={updateResource}
              isAdmin={isAdmin}
            />
          ))}{" "}
          <div className="pagination">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={postsPerPage}
              totalItemsCount={resources.length}
              pageRangeDisplayed={5}
              onChange={paginate}
              prevPageText="Prev"
              nextPageText="Next"
              firstPageText="First"
              lastPageText="Last"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Resources;
