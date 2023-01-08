import React from 'react'

const ptsd = () => {
  return (
    <>
        <div className='background'>
      <div id = "Section">
        <p> <b style={{color: "#C48406"}}>Summary:</b> Post-traumatic stress disorder (PTSD) is a mental health condition that's triggered by a terrifying event — either experiencing it or witnessing it. Symptoms may include flashbacks, nightmares and severe anxiety, as well as uncontrollable thoughts about the event.</p>
      </div>
      <div id = "Section">
        <p><b style={{color: "#C48406"}}>Cause:</b> Although there are countless causes for PTSD here are some of the more commmon ones.</p>      
        <ol id="list">
          <li>Physical or sexual abuse/violence</li>
          <li>Death of a loved one</li>
          <li>Witnessing injury</li>
          <li>Exposure to natural disaster</li>
          <li>Victim of serious crime</li>
        </ol>
      </div>
      <div id='Section'>
      <p><b style={{color: "#C48406"}}>Symptoms:</b> Symptoms vary drastically depending on the patients age, sex, and cause.</p>      
        <ol id="list">
          <li>Flashbacks</li>
          <li>Nightmares </li>
          <li>Severe anxiety</li>
          <li>Uncontrollable thoughts about the event </li>
          <li>Reliving the event as if it were happening again.</li>
          <li>Severe emotional distress or physical reactions</li>
          <li>Feelings of detachments</li>
          <li>Hopelessness</li>
        </ol>
      </div>

      <div id='Section'>
      <p><b style={{color: "#C48406"}}>Treatment:</b> Treatment varies heavily depending on the experience which causes the patient to develop PTSD.</p>      
        <ol id="list">
            <li>
              <b style={{color: "#D7A238"}}>Psychotherapy:</b>
              <ol id="doubleBulletPoints">
                <li> <b style={{color: "#edd68a"}}>Cognitive Behavioral Therapy:</b>  
                  <ol id="tripleBulletPoints">
                  <li><b style={{color: "#edd68a"}}>Acceptance and commitment therapy:</b>Focuses on accepting the traumatic event rather than challenging it.</li>
                  <li><b style={{color: "#edd68a"}}>Exposure therapy:</b> creates a safe environment to expose individuals to things that they fear and avoid. The exposure to the feared objects, activities or situations in a safe environment helps reduce fear and decrease avoidance.</li>
                  <li><b style={{color: "#edd68a"}}>Cognitive restructuring:</b> Exchanging negative thoughts for positive ones.</li>
                  <li><b style={{color: "#edd68a"}}>Stress inoculation training:</b>Patients are taught relaxation techniques such as breathing, progressive muscle relaxation skills, and communication coping skills.</li>
                  </ol>
                </li>
                <li><b style={{color: "#edd68a"}}>Trauma-focused cognitive behavioral therapy:</b> Individuals work through the memories of the trauma in a safe and structured environment, trying to correct negative cognitions and thoughts while also performing gradual exposure to triggers. This therapy is held over 8 to 25 sessions with the child/adolescent and their caregiver. The treatment helps correct distorted beliefs in the children while also helping parents and caregivers process their own distress and support the children.</li>
                <li> <b style={{color: "#edd68a"}}>Prolonged exposure therapy:</b> Prolonged exposure therapy typically consists of 8 to 15 weekly, 90 minutes sessions. Patients will first be exposed to a past traumatic memory, after which they immediately discuss the traumatic memory and then are exposed to a ”safe, but trauma related situations that the fluent fears and avoids” </li>

              </ol>
            </li>
            <li id="bottom-margin"><b style={{color: "#D7A238"}}>Medication:</b> Antidepressants</li>
        </ol>
        

        
      </div>




    </div></>
  )
}

export default ptsd