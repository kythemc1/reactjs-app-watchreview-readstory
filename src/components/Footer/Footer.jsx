import styled from "styled-components";

function Footer() {
  return (
    <FooterPane>
      <p>Created by HKT © 2023</p>
    </FooterPane>
  );
}

export default Footer;
const FooterPane = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  text-align: center;
  height: 100%;
  .info {
    margin: 0 auto;
  }
`;
