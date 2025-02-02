import styled from "styled-components";
const AboutStyled = styled.div`
  background-color: rgba(128, 128, 128, 0.1);
  padding-top: 48px;
  padding-bottom: 48px;
  padding-right: 40px;
  padding-left: 40px;
  .info-container {
    margin-bottom: 48px;
  }
  .profession {
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 23px;
  }
  .name {
    font-size: 45px;
    font-weight: 700;
    line-height: 89px;
  }
  .description {
    color: #595959;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    margin-top: 24px;
  }
  .projects-container {
    margin-bottom: 75px;
  }
  .about-me-title {
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 10px;
  }
  .projects-link-container {
    display: flex;
    align-items: baseline;
    /* margin-left: 17px; */
  }
  .projects-link {
    color: #595959;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .projects-link:hover,
  .projects-link:focus {
    color: #ff6b08;
  }
  .projects-container .description {
    margin-top: 5px;
  }
  .tech-name {
    color: #595959;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }
  .dots {
    flex-grow: 1;
    border-bottom: 1px dotted #bebebe;
    color: #bebebe;
    font-weight: 100;
  }
  .projects-item {
    font-weight: 700;
    border-bottom: 1px solid #eeeeee;
  }
  .projects-item::marker {
    margin-left: 10px;
  }
  .projects-item:not(:last-child) {
    margin-bottom: 20px;
  }
  .profession-title {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    margin-top: 10px;
    margin-bottom: 15px;
  }
  .profession-company {
    color: #ff7f2a;
  }
  .about-me-period {
    color: #a8a8a8;
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 14px;
  }
  .about-me-divider {
    color: #000000;
  }
  .profession-duties {
    margin-top: 14px;
    margin-bottom: 48px;
    margin-left: 14px;
  }
  .profession-duties-item {
    color: #595959;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }
  .education-container {
    margin-top: 25px;
  }
  .education-list-item:not(:last-child) {
    margin-bottom: 25px;
  }
  .education-title {
    color: #ff6b08;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    margin-top: 10px;
  }
  .education-specialty {
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;
export default AboutStyled;
