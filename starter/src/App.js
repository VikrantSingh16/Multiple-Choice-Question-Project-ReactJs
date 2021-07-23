import React, { useState } from 'react';
import questions  from './components/Questions';
import Header from './components/Header'
export default function App() {


	return (
		<div class="wrap">
			<Header></Header>
	
		<div className='app'>
			
			{false ? (
				<div className='score-section'>
					You scored 1 out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question 1</span>/{questions.length}
						</div>
						<div className='question-text'>question will be here</div>
					</div>
					<div className='answer-section'>
						
							<button>Answer button</button>
							<button>Answer button</button>
							<button>Answer button</button>
							<button>Answer button</button>
					</div>
				</>
			)}
		</div>
		</div>
	);
}
