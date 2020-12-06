import React, { useEffect, useState } from "react";
import "../../css/Allresources.css";
import ResourceEdRe from "./ResourceEdRe";
import { Card,Col } from "react-bootstrap";

const Allresources = ({
  resource,
  removeResourceById,
  updateResource,
  isAdmin,
}) => {
  const [desc, setDesc] = useState("");
  const [fullDesc, setFullDesc] = useState(false)

  useEffect(() => {
    resource.name && setDesc(resource.description.substr(0, 150));
  }, []);

  return (
    <Card className="mb-3">
      <Card.Header  className="res-cardheader">
        <div className="float-right">
          <ResourceEdRe
            resource={resource}
            removeResourceById={removeResourceById}
            updateResource={updateResource}
            isAdmin={isAdmin}
          />
        </div>
        {resource.name}
      </Card.Header>

      <Card.Body>
        <Card.Text className="resource-cardtxt">
          {desc}
          { fullDesc ?  (
              
              <span
              className="btn btn-link"
              onClick={() => {
                setFullDesc(false);
                setDesc(resource.description.substr(0, 150));
              }}
            >
              show less{" "}
           
            </span>
              
              ) : ( 

            resource.description.length > 150 ?  ( 
              <span
              className="btn btn-link"
              onClick={() => {
                setDesc(resource.description);
                setFullDesc(true);
              }}
            >
              show more{" "}
           
            </span>
            ): ("")
          )}
        </Card.Text>
        <a className="btn-nextlink float-right" href={resource.website}>
          Visit Website
        </a>
      </Card.Body>
    </Card>
  );
};

export default Allresources;
