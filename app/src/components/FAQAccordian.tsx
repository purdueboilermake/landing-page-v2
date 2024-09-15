/**
 * FAQAccordian.tsx
 * Will be used to display the Frequently Asked Questions that hackers might have
 * @AshokSaravanan222
 * 09-15-2024
 */

type FAQAccordianProps = {
    questions: {question: string, answer: string}[];
}

export default function FAQAccordian({ questions }: FAQAccordianProps) {
    return (
        <div>
            {questions.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                    <div className="flex items-center justify-between py-4">
                        <h3 className="text-lg font-bold">{faq.question}</h3>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    <p className="text-gray-500">{faq.answer}</p>
                </div>
            ))}
        </div>
    )
}