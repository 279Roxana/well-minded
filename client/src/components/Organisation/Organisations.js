import React, { useState } from "react";
import { Card, Container, Button, Row, Col, Form } from "react-bootstrap";
import OrganisationAddForm from "./OrganisationAddForm";
import OrganisationsEditDelete from "./OrganisationsEditDelete";
import Pagination from "react-js-pagination";
import "../../css/Allresources.css";
import "../../css/Organisation.css";

const Organisations = ({ organisations, setOrganisations, isAdmin }) => {
  const [showAdd, setShowAdd] = useState(false);
  const [searchOrg, setSearchOrg] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(5);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = organisations.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (number) => setCurrentPage(number);

  const removeOrganisationById = (id) => {
    setOrganisations(organisations.filter(({ _id }) => _id !== id));
  };

  const updateOrganisation = (organisation) => {
    setOrganisations(
      organisations.map((existingOrganisation) =>
        existingOrganisation._id === organisation._id
          ? organisation
          : existingOrganisation
      )
    );
  };
  const filteredOrgs = currentPosts.filter(
    (organisation) =>
      organisation.name.toLowerCase().includes(searchOrg) ||
      organisation.category.includes(searchOrg)
  );

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="org-headline text-center mt-3">
            Find an Organisation
          </h2>
          <Form.Control
            value={searchOrg}
            onChange={(e) => setSearchOrg(e.target.value)}
            className="p-3"
            type="search"
            name="from"
            placeholder="Search Organisation"
          />
          {filteredOrgs.map((organisation) => {
            return (
              <Card className="border-2 org-text" key={organisation._id}>
                <Card.Header className="text-header">
                  {organisation.name}
                  <div className="float-right edit-delete-btn">
                    <OrganisationsEditDelete
                      organisation={organisation}
                      removeOrganisationById={removeOrganisationById}
                      updateOrganisation={updateOrganisation}
                      isAdmin={isAdmin}
                    />
                  </div>
                </Card.Header>

                <Card.Body>
                  <Card.Text className="h-auto text-description">
                    {organisation.description}
                  </Card.Text>
                  <Card.Text className="text-location">
                    <span className="location">Location: </span>
                    {organisation.location}
                  </Card.Text>
                  <a
                    className="btn-nextlink float-right"
                    href={organisation.website}
                  >
                    Visit Charity
                  </a>
                </Card.Body>
              </Card>
            );
          })}
          <div className="pagination">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={postsPerPage}
              totalItemsCount={organisations.length}
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
export default Organisations;
