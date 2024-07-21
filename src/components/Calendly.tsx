'use client';

import Script from 'next/script';

export default function Calendly() {
	return (
		<div>
			<div
				className="calendly-inline-widget"
				data-url="https://calendly.com/mateusppa10/free-mentorship"
				style={{ minWidth: '320px', height: '700px' }}
			/>
			<Script
				type="text/javascript"
				src="https://assets.calendly.com/assets/external/widget.js"
				async
			/>
		</div>
	);
}
