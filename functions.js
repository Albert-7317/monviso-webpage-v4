function home() {
    window.location.href = "index.html";
}

function goToAbout() {
    window.location.href = "aboutus.html";
}

function goToTeam() {
    window.location.href = "meetteam.html";
}

function goToFAQ() {
    window.location.href = "faq.html";
}

function email() {
    console.log('work in progress')
}

function linkedIn() {
    console.log('coming soon')
}

function sectionOne() {
    document.getElementById('textarea').value = 'Monviso was founded in May 2020 as a boutique alternative investment consultancy firm by Richard Novck and several partners. The firm is regulated by the FCA in the UK and offers services to both assest managers and investors. We are centerd on deep due diligence and selection of alpha generating asset managers for the benefit of potential investors.'
    document.getElementById('head').innerText = 'Introduction'
}

function sectionTwo() {
    document.getElementById('textarea').value = '*  At our core we focus on strategy selection through an extensive, repeatable, institutionalised due diligence process. \n \n*  The team of 4 principals has over a century of front-line experience in capital markets including: manager selection, due diligence, portfolio and risk management, trading, operations, business development, fund structuring and legal matters plus raising assets. \n \n*  We have extensive knowledge working with absolute return, highly liquid uncorrelated strategies which are Monviso’s direct expertise rooted from its principals’ many years of experience running proprietary trading and asset management companies. \n \n*  We embrace hard to access specialist and often capacity constrained strategies. \n \n*  The team is supported by an equally qualified group of brokers with extensive experience across product types and jurisdiction. \n \n* We provide targeted sourcing and due diligence services by investor mandate. \n \n* We can provide a fully outsourced business development and marketing capability to our fund manager clients and our approach is to develop working relationships in the spirit of true partnership.'
    document.getElementById('head').innerText = 'Highlights'
}                                     

function sectionThree() {
    document.getElementById('textarea').value = '*  The mission of Monviso is to build long-term relationships with investor clients and a select group of alternative investment funds leveraging our combined decades of experience. \n \n*  Monviso believes in the ‘All-Weather’ strategy concept. We aim to identify managers who generate repeatable absolute returns with low volatility and correlation to traditional asset classes. Our focus on tactical strategies has paid dividends with strong returns during the 2020 crisis driven by greater market opportunities and uncertainties should last into the future. \n \n*  We embrace the idea of sharing our knowledge and due diligence work with investors and sharing ideas with a broad range of industry participants. \n \n*  We are active and focused on understanding the complex issues of ESG integration in the hedge fund space in consideration to our clients’ needs.'
    document.getElementById('head').innerText = 'Philosphy'
}

function sectionFour() {
    document.getElementById('textarea').value = 'Monviso is highly specialised working with emerging and smaller boutique managers and is well positioned to capture the opportunity associated with the trend of increasing investor interest in this manager group. \n \n*  We offer a suite of marketing and business development services to upcoming managers providing inspiration to help them grow in a dynamic way. \n \n*  We have decades of direct trading and asset management experience working with managers in multi strategy solutions, across a range of asset classes. \n \n*  We have decades of direct trading and asset management experience working with managers in multi strategy solutions, across a range of asset classes. \n \n*  We offer to investors advisory and execution on hedging strategies, Outsourced Chief Investment Officer (OCIO) and Non-Executive Director (NED) services. \n \n*  The principals have been active within the Israeli investment community for 20 years and Monviso offers a liquid alternative platform with local partners and is actively sourcing locltalent to help them expand their geographic footprint. \n \n*  We take a very hands-on approach to marketing and capital introduction services to independent hedge fund managers and opportunistically work with quality strategies in private markets including PE/VC funds and direct deals originating from an extensive network. \n \n*  We seek hedge strategies with a quantitative focus and have reviewed 1000+ while identifying a deeply vetted diversified universe of investible managers with superior pedigree and top tier service providers.'
    document.getElementById('head').innerText = 'Unique Selling Points'
}

function submit() {
    console.log(document.getElementById('question').value)
    console.log(document.getElementById('email').value)
}