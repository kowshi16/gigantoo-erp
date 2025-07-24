export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-white flex-col lg:flex-row">
            {/* Left Content */}
            {children}

            {/* Right Content */}
            <div className="w-full lg:w-1/2 min-h-screen relative hidden lg:block">
                <img
                    src="https://miro.medium.com/v2/resize:fit:1400/1*qTL3vRBylRg_zRJxEtsSPg.jpeg"
                    alt="Login"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
        </div>
    );
}
