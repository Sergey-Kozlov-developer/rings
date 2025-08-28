interface ErrorProps {
	message: string;
}

function Error({ message }: ErrorProps) {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="text-2xl text-red-600">Error: {message}</div>
		</div>
	);
}

export default Error;
