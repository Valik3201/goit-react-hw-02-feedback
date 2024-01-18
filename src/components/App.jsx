import { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };

    this.handleLeaveFeedback = this.handleLeaveFeedback.bind(this);
    this.countTotalFeedback = this.countTotalFeedback.bind(this);
    this.countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage.bind(this);
  }

  handleLeaveFeedback(type) {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const positive = this.state.good;

    return total > 0 ? Math.round((positive / total) * 100) : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.5rem',
          fontWeight: 600,
          color: '#fff',
          backgroundImage: 'linear-gradient(73deg, #080614 51%, #12a282 80%)',
        }}
      >
        <h1>Expresso Feedback Widget</h1>
        <div
          style={{
            background: 'rgba(8, 6, 20, 0.275)',
            boxShadow: '0 0.75rem 2rem 0 rgba(18, 162, 130, 0.1)',
            borderRadius: '1rem',
            border: '1px solid rgba(8, 6, 20, 0.125)',
            padding: '2rem',
          }}
        >
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={['bad', 'neutral', 'good']}
              onLeaveFeedback={this.handleLeaveFeedback}
            />
          </Section>
          <Section title="Statistics">
            {total > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </div>
      </div>
    );
  }
}
