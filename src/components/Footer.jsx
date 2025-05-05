import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-secondary text-gray py-12">
    <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h3 className="text-xl font-bold mb-4">CarRent</h3>
                <p className="text-gray-400">Making car rental easy and accessible for everyone.</p>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <p className="text-gray-400">Email: info@carrent.com</p>
                <p className="text-gray-400">Phone: (555) 123-4567</p>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-primary">Facebook</a>
                    <a href="#" className="text-gray-400 hover:text-primary">Twitter</a>
                    <a href="#" className="text-gray-400 hover:text-primary">Instagram</a>
                </div>
            </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CarRent. All rights reserved.</p>
        </div>
    </div>
</footer>
  )
}

export default Footer
