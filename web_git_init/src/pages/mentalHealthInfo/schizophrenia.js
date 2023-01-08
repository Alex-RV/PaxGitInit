import React from 'react'
import './MyStyles.css';
const Schizophrenia = () => {
  return (
    <>
    <div className='background'>
      <div id = "Section">
        <p> <b>Summary:</b> Schizophrenia causes psychosis (hallucinations, delusions) and is often paired with disordered thought processes & motor functions that impairs the patient.</p>
      </div>
      <div id = "Section">
        <p><b>Cause:</b> Although there are many causes for Schizophrenia, here are some of the more commmon ones.</p>      
        <ul id="list">
          <li>History of Schizophrenia within family</li>
          <li>Brain Development (Studies of people with schizophrenia have shown there are subtle differences in the structure of their brains)</li>
          <li>Drug & Alcohol Usage (Some people may develop symptoms of schizophrenia after using cannabis or other recreational drugs)</li>
          <li>
            Stressful life events
            <ol id="doubleBulletPoints">
              <li>Harassment and/or (sexual) assault </li>
              <li>Loss of a friend and/or family member</li>
              <li>Isolation and/or being lonely</li>
            </ol>
          </li>
        </ul>
      </div>
      <div id='Section'>
      <p><b>Symptoms:</b> There are a ton of possible symptoms for Schizophrenia. Here are some of them listed.</p>      
        <ul id="list">
          <li><b>Delusions: </b>
          These are false beliefs that are not based in reality. For example, you think that you're being harmed or harassed; certain gestures or comments are directed at you; you have exceptional ability or fame; another person is in love with you; or a major catastrophe is about to occur.
          </li>
          <li><b>Hallucinations: </b> 
          These usually involve seeing or hearing things that don't exist. Yet for the person with schizophrenia, they have the full force and impact of a normal experience. Hallucinations can be in any of the senses, but hearing voices is the most common hallucination.</li>
          <li>
            <b>Disorganized thinking & speech: </b>
            Disorganized thinking is inferred from disorganized speech. Effective communication can be impaired, and answers to questions may be partially or completely unrelated. Rarely, speech may include putting together meaningless words that can't be understood, sometimes known as word salad.
          </li>
          <li>
            <b>Extremely disorganized or abnormal motor behavior: </b> 
            This may show in a number of ways, from childlike silliness to unpredictable agitation. Behavior isn't focused on a goal, so it's hard to do tasks. Behavior can include resistance to instructions, inappropriate or bizarre posture, a complete lack of response, or useless and excessive movement.
          </li>
          <li>
            <b>Reduced or lack of ability to function normally: </b>
            For example, the person may neglect personal hygiene or appear to lack emotion (doesn't make eye contact, doesn't change facial expressions or speaks in a monotone). Also, the person may lose interest in everyday activities, socially withdraw or lack the ability to experience pleasure.
          </li>
        </ul>
      </div>

      <div id='Section'>
      <p><b>Treatment: </b>Schizophrenia is usually treated with a combination of medication and therapy appropriate to each individual. In most cases, this will be antipsychotic medicines and cognitive behavioral therapy (CBT).</p>      
      </div>
      <div id="Section">
        <ol id="list">
            <li>
              <b>Medications:</b>
              <ol id="doubleBulletPoints">
                <li><b>First-generation antipsychotics:</b> 
                  <p><small>(These first-generation antipsychotics have frequent and potentially significant neurological side effects, including the possibility of developing a movement disorder (tardive dyskinesia) that may or may not be reversible.) First-generation antipsychotics include: </small></p>
                  <ol id="tripleBulletPoints">
                  <li><b>Chlorpromazine</b></li>
                  <li><b>Fluphenazine</b></li>
                  <li><b>Haloperidol</b></li>
                  <li><b>Perphenazine</b></li>
                  </ol>
                </li>
                <li><b>Second-generation antipsychotics</b> 
                  <p><small>(These newer, second-generation medications are generally preferred because they pose a lower risk of serious side effects than do first-generation antipsychotics.) Second-generation antipsychotics include:</small></p>
                  <ol id="tripleBulletPoints">
                  <li><b>Aripiprazole (Abilify)</b></li>
                  <li><b>Asenapine (Saphris)</b></li>
                  <li><b>Brexpiprazole (Rexulti)</b></li>
                  <li><b>Cariprazine (Vraylar)</b></li>
                  <li><b>Clozapine (Clozaril, Versacloz)</b></li>
                  <li><b>Iloperidone (Fanapt)</b></li>
                  <li><b>Lurasidone (Latuda)</b></li>
                  <li><b>Olanzapine (Zyprexa)</b></li>
                  <li><b>Paliperidone (Invega)</b></li>
                  <li><b>Quetiapine (Seroquel)</b></li>
                  <li><b>Risperidone (Risperdal)</b></li>
                  <li><b>Ziprasidone (Geodon)</b></li>
                  </ol>          
                </li>
                <li><b>Long-acting injectable antipsychotics: </b></li>
                <p><small>(Some antipsychotics may be given as an intramuscular or subcutaneous injection. They are usually given every two to four weeks, depending on the medication. Ask your doctor about more information on injectable medications. This may be an option if someone has a preference for fewer pills and may help with adherence)</small></p>
                <p>Common medications that are available as an injection include: </p>
                <ol id="tripleBulletPoints">
                  <li><b>Aripiprazole (Abilify Maintena, Aristada)</b></li>
                  <li><b>Fluphenazine decanoate</b></li>
                  <li><b>Haloperidol decanoate</b></li>
                  <li><b>Paliperidone (Invega Sustenna, Invega Trinza)</b></li>
                  <li><b>Risperidone (Risperdal Consta, Perseris)</b></li>
                </ol>
              </ol>
              <p></p>
              <b>Psychosocial interventions: </b>
              <p><small>(Once psychosis recedes, in addition to continuing on medication, psychological and social (psychosocial) interventions are important. These may include)</small></p>
              <ol id="doubleBulletPoints">
                <li><b>Individual therapy: </b> <p>Psychotherapy may help to normalize thought patterns. Also, learning to cope with stress and identify early warning signs of relapse can help people with schizophrenia manage their illness.</p></li>
                <li><b>Social skills training: </b> <p>This focuses on improving communication and social interactions and improving the ability to participate in daily activities.</p></li>
                <li><b>Family therapy: </b><p>This provides support and education to families dealing with schizophrenia.</p></li>
                <li><b>Vocational rehabilitation and supported employment:</b><p>This focuses on helping people with schizophrenia prepare for, find, and keep jobs.</p></li>
              </ol>
            </li>
        </ol>
      </div>




    </div></>
  )
}

export default Schizophrenia