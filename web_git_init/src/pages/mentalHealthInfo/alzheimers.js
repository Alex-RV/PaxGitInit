import React from 'react'

const Alzheimers = () => {
  return (
    <>
        <div className='background'>
      <div id = "Section">
        <p> <b>Summary:</b> Alzheimer's disease is an irreversible brain disorder that affects millions of Americans today. It usually starts with memory loss, and could progressively worsen into not being able to hold a conversation or do daily tasks.</p>
        <p>Currently, age is the best known risk factor for Alzheimer's. Individuals that are older generally have a higher chance of being diagnosed with Alzheimer's.</p>
      </div>
      <div id = "Section">
        <p><b>Causes:</b> Although old age is believed to be the most common cause for Alzheimer's, here are also some others.</p>      
        <ul id="list">
          <li>
            <b>Genetics: </b>
            <ol id="doubleBulletPoints"> 
              <li>A family history of Alzheimer's does not guarantee Alzheimer's, but it will be responsible for a higher chance of developing Alzheimer's.</li>
            </ol>
            <p>A person that stays healthy as they age will likely not get Alzheimer's.</p>
            <p>In order to achieve a healthy lifestyle, <b>do the following:</b></p>
            <ol id="doubleBulletPoints">
              <li>Proper nutrition and a balanced diet</li>
              <li>Enough physical activity every day, this could be as simple as a 30 minute walk</li>
              <li>Social engagement: Humans were created to be social creatures. Social interaction can help a person feel happier, and also lower risks of dementia. This is because during socialization, memory and cognitive skills are sharpened.</li>
              <li>Sleep: Getting enough sleep is crucial for proper bodily function. A lack of sleep results in slower reaction times, loss of memory, and feeling tired throughout the day. Constant sleep deprivation over a long enough time period can cause irreversible damage to the brain.</li>
              <li>Interesting fact: High levels of education have been shown in studies to be related with a lower risk of dementia. </li>
            </ol>
          </li>
        </ul>
      </div>
      <div id='Section'>
        <p><b>Types of Alzheimers: </b></p>
        <ol id="list">
          <li>
          <p><b>Late-Onset Alzheimer's: </b></p>
          <ol id="doubleBulletPoints">
            <li>Signs of Alzheimers first appearing in the mid 60's.</li>
            <li>This is the more common of the two different Alzheimers.</li>
            <li>Commonly involves a gene called APOE ε4</li>
          </ol>
          </li>
          <li>
            <p><b>Early-Onset Alzheimer's:</b></p>
            <ol id="doubleBulletPoints">
              <li>Signs of Alzheimers fist appearing between 30-mid 60's.</li>
              <li>This is much more rare compared to the Late-Onset Alzheimer's</li>
              <li>Usually, it is caused by the genes inherited from the parent, to the child.</li>
            </ol>
          </li>
        </ol>
      </div>
      <div id='Section'>
      <p><b>Symptoms:</b></p>      
        <ul id="list">
          <li>Memory loss that disrupts daily life, such as forgetting how to navigate a familiar place.</li>
          <li>Trouble handling money and paying bills.</li>
          <li>Difficulty completing familiar tasks at home, at work or at leisure.</li>
          <li>Decreased or poor judgment.</li>
          <li>Changes in mood, personality, or behavior.</li>
        </ul>
      </div>

      <div id='Section'>
      <p><b>Treatments: </b><small>Unfortunately, there is no known cure for Alzheimer's.</small></p>   
      <p>If possible, treatments should address to help people with Alzheimer's in the <b>following ways</b>: </p>   
        <ol id="list">
            <li>Helping people maintain brain health.</li>
            <li>Managing behavioral symptoms.</li>
            <li>Slowing or delaying symptoms of the disease.</li>
        </ol>
      </div>




    </div></>
  )
}

export default Alzheimers