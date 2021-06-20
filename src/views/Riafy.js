import { AppData } from "contexts/AppData";
import useFirestore from "hooks/useFirestore";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col,
  Button,
  Row,
  CardText,
} from "reactstrap";
import { useApi } from "hooks/useApi";
import { constants } from "utils/constants";
import { download } from "utils/download";

function Riafy(props) {
  const [loading, setLoading] = React.useState("");
  const { data, onSetData } = React.useContext(AppData);

  useApi(constants.riafyApi);

  const update = (dt) => dt && onSetData([...dt]);

  useFirestore({ update, dev: "riafy" });

  const onClick = async (pack) => {
    setLoading(pack);
    await download(pack);
    setLoading("");
  };
  const defaultImg = require("../assets/img/react-logo.png");

  return (
    <>
      <div className="content">
        <CardTitle tag="h1">{data.length} apps</CardTitle>
        <Row>
          {data.map((itm, i) => (
            <Col lg="6" key={i}>
              <Card
                className="card-chart "
                style={{ display: "flex", flexDirection: "row" }}
              >
                <CardHeader style={{ textAlign: "center" }}>
                  <div
                    className="chart-area"
                    style={{ width: 100, height: 100, marginBottom: 16 }}
                  >
                    <img src={itm?.icon ? itm?.icon : defaultImg} alt={""} />
                  </div>
                </CardHeader>
                <CardBody>
                  <CardTitle tag="h3">
                    {itm?.title?.length > 20
                      ? itm?.title.slice(0, 20) + "..."
                      : itm?.title}
                  </CardTitle>
                  <CardText>{itm?.appId}</CardText>
                  {loading === itm.appId ? (
                    <CardText> Loading...</CardText>
                  ) : (
                    <Button onClick={() => onClick(itm?.appId)}>
                      Download
                    </Button>
                  )}
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Riafy;
