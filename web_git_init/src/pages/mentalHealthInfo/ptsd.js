import React from 'react'

const Ptsd = () => {
  return (
    <>
        <div className='background'>
      <div id = "Section">
        <p> <b>Summary:</b> Post-traumatic stress disorder (PTSD) is a mental health condition that's triggered by a terrifying event — either experiencing it or witnessing it. Symptoms may include flashbacks, nightmares and severe anxiety, as well as uncontrollable thoughts about the event.</p>
      </div>
      <div id = "Section">
        <p><b>Cause:</b> Although there are countless causes for PTSD, here are some of the more commmon ones.</p>      
        <ul id="list">
          <li>Physical or sexual abuse/violence</li>
          <li>Death of a loved one</li>
          <li>Witnessing injury</li>
          <li>Exposure to natural disaster</li>
          <li>Victim of serious crime</li>
        </ul>
      </div>
      <div id='Section'>
      <p><b>Symptoms:</b> Symptoms vary drastically depending on the patients age, sex, and cause.</p>      
        <ul id="list">
          <li>Flashbacks</li>
          <li>Nightmares </li>
          <li>Severe anxiety</li>
          <li>Uncontrollable thoughts about the event </li>
          <li>Reliving the event as if it were happening again.</li>
          <li>Severe emotional distress or physical reactions</li>
          <li>Feelings of detachments</li>
          <li>Hopelessness</li>
        </ul>
      </div>

      <div id='Section'>
      <p><b>Treatment: </b>Treatment varies heavily depending on the experience which causes the patient to develop PTSD.</p>      
        <ol id="list">
            <li>
              <b>Psychotherapy:</b>
              <ol id="doubleBulletPoints">
                <li>Cognitive Behavioral Therapy: 
                  <ol id="tripleBulletPoints">
                  <li><b>Acceptance and commitment therapy: </b>Focuses on accepting the traumatic event rather than challenging it.</li>
                  <li><b>Exposure therapy: </b> creates a safe environment to expose individuals to things that they fear and avoid. The exposure to the feared objects, activities or situations in a safe environment helps reduce fear and decrease avoidance.</li>
                  <li><b>Cognitive restructuring:</b> Exchanging negative thoughts for positive ones.</li>
                  <li><b>Stress inoculation training: </b>Patients are taught relaxation techniques such as breathing, progressive muscle relaxation skills, and communication coping skills.</li>
                  </ol>
                </li>
                <li><b>Trauma-focused cognitive behavioral therapy:</b> Individuals work through the memories of the trauma in a safe and structured environment, trying to correct negative cognitions and thoughts while also performing gradual exposure to triggers. This therapy is held over 8 to 25 sessions with the child/adolescent and their caregiver. The treatment helps correct distorted beliefs in the children while also helping parents and caregivers process their own distress and support the children.</li>
                <li> <b>Prolonged exposure therapy:</b> Prolonged exposure therapy typically consists of 8 to 15 weekly, 90 minutes sessions. Patients will first be exposed to a past traumatic memory, after which they immediately discuss the traumatic memory and then are exposed to a ”safe, but trauma related situations that the fluent fears and avoids” </li>
              </ol>
            </li>
            <li>
              <b>Medication:</b> Antidepressants
              <p><small>These medications can help reduce known PTSD symptoms:</small></p>
              <ol id="doubleBulletPoints">
              <li><b>Sertraline (Zoloft)</b></li>
              <li><b>Paroxetine (Paxil)</b></li>
              <li><b>Fluoxetine (Prozac)</b></li>
              <li><b>Venlafaxine (Effexor)</b></li>
              </ol>
            </li>
        </ol>
        

        
      </div>




    </div></>
  )
}

export default Ptsd