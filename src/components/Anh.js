import React from 'react';
import { Card, Button} from 'react-bootstrap';

function Anh() {
    return (
        <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://1.bp.blogspot.com/-Pz8oDSd7saE/X4qXGkYYBlI/AAAAAAAABWE/D4yLvKycVQ4jAwVu4Pp7bGDX_jdhDsg3gCLcBGAsYHQ/s600/an-ty-huu-hong-thach%2B%25282%2529.jpg" />
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
    )
}

export default Anh
