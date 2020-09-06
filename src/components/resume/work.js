import React from "react";

const Work = () => (

  <div className="row work">

    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">

          <div className="twelve columns">
            <h3>CMAIG (Coordinación de Modernización Administrativa e Innovación Gubernamental)</h3>
            {/*<img className="profile-pic" src={ profile_img }  alt="" />*/}
            <p className="info">
              Python | Web Developer
              <span>&bull;</span>
              <em className="date">January 2017 - January 2018</em>
            </p>
            <p>
              Working as Python | Web Developer implementing efficient flows and
              data structuring for financial systems.
              Building & debugging API´s for make it fast, efficient and
              reliable, using DjangoRestFramework for external DataSources connections.<br />
              Tunning Data related Views with Numpy | Pandas |  
              Pep8 | Data Structuring.
            </p>
          </div>
      </div>
    </div>

    <div className="three columns header-col">
      
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">

          <h3>CI Banco</h3>
          <p className="info">
            SysAdmin
            <span>&bull;</span>
            <em className="date">May 2018 - Oct 2018</em>
          </p>
          <p>
            Creating and monitoring financial processes for the company.
            Deploy of new apps and implementations.
            Debugging apps, workflows, scheduled jobs and many other internal 
            processes related all infrastructure as daily routine.
          </p>
        </div>
      </div>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">

          <h3>Volaris</h3>
          <p className="info">
            Senior Application Support Specialist
            <span>&bull;</span>
            <em className="date">Oct 2018 - Present</em>
          </p>

          <p>
            In main position of monitoring | implementation | issues correction
            and processes for the core Company, customer Service and many others.
            Multitasking.
            Critical incident control and management for Aeronautical | Business
            Applications.
            Business flow process administration.
            Implementing data analysis | ETL tools for minimize and structure data
            output for business decision making and future analysis.
            DRP | App-flow implementation.<br />
            Administering Linux and Windows servers.
            Scheduling tasks and external connections for provider apps.
            Monitoring apps for keep critial core apps fresh to keep an eye on them.
          </p>
        </div>
      </div>
    </div>

  </div>
);

export default Work;
