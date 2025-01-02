import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center">
      <div className="space-y-6 text-center">
        <pre className="text-accent whitespace-pre font-mono">
          {`
       _             _            _           
   _  /\\ \\         / /\\       _  /\\ \\         
  /\\_\\\\ \\ \\       / /  \\     /\\_\\\\ \\ \\        
 / / / \\ \\ \\     / / /\\ \\   / / / \\ \\ \\       
/ / /   \\ \\ \\   / / /\\ \\ \\ / / /   \\ \\ \\      
\\ \\ \\____\\ \\ \\ /_/ /  \\ \\ \\\\ \\ \\____\\ \\ \\     
 \\ \\________\\ \\\\ \\ \\   \\ \\ \\\\ \\________\\ \\    
  \\/________/\\ \\\\ \\ \\   \\ \\ \\/________/\\ \\   
            \\ \\ \\\\ \\ \\___\\ \\ \\         \\ \\ \\  
             \\ \\_\\\\ \\/____\\ \\ \\         \\ \\_\\ 
              \\/_/ \\_________\\/          \\/_/ 
                                              
          `}
        </pre>
        <p className="text-gray-400">
          There are no secrets you can&apos;t find in the source code.
        </p>
        <Link
          href="/"
          className="hover:text-accent inline-block text-gray-400 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
