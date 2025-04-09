import React, { useEffect, useState } from 'react';

const SurveyForm = () => {
  const topicQuestions = {
    technology: [
      {
        type: 'radio',
        question: 'How often do you upgrade your smartphone?',
        options: ['Every year', 'Every 2-3 years', 'Every 4-5 years', 'Rarely or never']
      },
      {
        type: 'checkbox',
        question: 'Which of the following technologies do you use regularly?',
        options: ['Artificial Intelligence', 'Virtual Reality', 'Cloud Computing', 'Internet of Things', 'Blockchain']
      }
    ],
    health: [
      {
        type: 'radio',
        question: 'How often do you exercise?',
        options: ['Daily', '3-4 times a week', '1-2 times a week', 'Rarely or never']
      },
      {
        type: 'checkbox',
        question: 'Which of the following health practices do you follow?',
        options: ['Regular check-ups', 'Balanced diet', 'Meditation', 'Yoga', 'Tracking sleep patterns']
      }
    ],
    education: [
      {
        type: 'radio',
        question: 'How do you prefer to learn new skills?',
        options: ['Online courses', 'In-person classes', 'Self-study with books', 'Hands-on experience']
      },
      {
        type: 'checkbox',
        question: 'Which of the following educational resources do you use?',
        options: ['MOOCs', 'Educational apps', 'Textbooks', 'Video tutorials', 'Study groups']
      }
    ]
  };

  const baseQuestions = [
    {
      type: 'radio',
      question: 'Do you agree with the statement above?',
      options: ['Yes', 'No', 'Unsure']
    },
    {
      type: 'checkbox',
      question: 'Select the options that apply to you:',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']
    },
    {
      type: 'radio',
      question: 'How likely are you to recommend this survey to others?',
      options: ['Very likely', 'Somewhat likely', 'Neutral', 'Somewhat unlikely', 'Very unlikely']
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    userType: '',
    surveyCategory: 'technology',
    feedback: ''
  });
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const combined = [...(topicQuestions[formData.surveyCategory] || []), ...baseQuestions];
    setQuestions(combined);
    setCurrentQuestion(0);
    setAnswers({});
  }, [formData.surveyCategory]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAnswer = (questionIndex, option, isCheckbox) => {
    setAnswers(prev => {
      const existing = prev[questionIndex] || [];
      if (isCheckbox) {
        const updated = existing.includes(option)
          ? existing.filter(o => o !== option)
          : [...existing, option];
        return { ...prev, [questionIndex]: updated };
      } else {
        return { ...prev, [questionIndex]: [option] };
      }
    });
  };

  const validateCurrent = () => {
    const answer = answers[currentQuestion];
    return answer && answer.length > 0;
  };

  const handleNext = () => {
    if (validateCurrent()) {
      setCurrentQuestion(q => q + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.phone &&
      formData.age &&
      formData.userType &&
      formData.surveyCategory &&
      validateCurrent()
    ) {
      setShowThankYou(true);
    }
  };

  const renderQuestion = () => {
    const q = questions[currentQuestion];
    if (!q) return null;

    return (
      <fieldset>
        <legend>Question {currentQuestion + 1}</legend>
        <p>{q.question}</p>
        {q.options.map((opt, idx) => {
          const isChecked = answers[currentQuestion]?.includes(opt) || false;
          return (
            <label key={idx}>
              <input
                type={q.type}
                name={`question${currentQuestion}`}
                value={opt}
                checked={isChecked}
                onChange={() => handleAnswer(currentQuestion, opt, q.type === 'checkbox')}
              />
              {opt}
            </label>
          );
        })}
      </fieldset>
    );
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1>Online Survey</h1>
        {!showThankYou ? (
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Personal Info</legend>
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />

              <label>Phone Number:</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

              <label>Age:</label>
              <input type="number" name="age" min="18" max="120" value={formData.age} onChange={handleChange} required />

              <label>User Type:</label>
              <select name="userType" value={formData.userType} onChange={handleChange} required>
                <option value="">Select User Type</option>
                <option value="student">Student</option>
                <option value="professional">Professional</option>
                <option value="retired">Retired</option>
              </select>

              <label>Preferred Survey Category:</label>
              <select name="surveyCategory" value={formData.surveyCategory} onChange={handleChange} required>
                <option value="technology">Technology</option>
                <option value="health">Health</option>
                <option value="education">Education</option>
              </select>
            </fieldset>

            {currentQuestion < questions.length && (
              <>
                <fieldset>
                  <legend>Survey</legend>
                  <div style={styles.progress}>{currentQuestion + 1}/{questions.length}</div>
                  {renderQuestion()}
                  <button type="button" onClick={handleNext}>Next</button>
                </fieldset>
              </>
            )}

            {currentQuestion === questions.length && (
              <fieldset>
                <legend>Feedback</legend>
                <label>Please provide any additional thoughts:</label>
                <textarea
                  rows="4"
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                />
                <button type="submit">Submit Survey</button>
              </fieldset>
            )}
          </form>
        ) : (
          <div style={styles.thankYou}>
            <h2>Thank you for completing the {formData.surveyCategory} survey!</h2>
            <p>Your responses have been recorded.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  body: {
    backgroundColor: '#0616a4',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
  },
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  progress: {
    textAlign: 'right',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#032B44'
  },
  thankYou: {
    background: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    textAlign: 'center'
  }
};

export default SurveyForm;
