import React from "react";

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }


    /**
     * Called whenever an error is thrown in a descendant component.
     * Re-renders the component tree with the fallback UI.
     * @param {Error} error The error that was thrown.
     * @return {{ hasError: boolean }} The next component state.
     */
    static getDerivedStateFromError(error: Error) {
        console.log(error)
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log(error, errorInfo);
    }

    render(): React.ReactNode {
        if (this.state.hasError) {
            return (
                <div className="flex h-screen items-center justify-center bg-gray-100">
                    <div className="p-6 rounded-2xl shadow-lg bg-white text-center">
                        <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
                        <p className="text-gray-600">Please try refreshing the page.</p>
                    </div>
                </div>
            );
        };
        return this.props.children;
    }
}

export default ErrorBoundary