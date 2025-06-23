import React from 'react'

export default function Footer() {
    return (
        <>
            <hr />
            <footer className="bg-theme text-theme text-center py-8 mt-auto">
                <p className="text-md">
                    &copy; {new Date().getFullYear()} Ali Hamza. All rights reserved.
                </p>
            </footer>
        </>
    )
}
