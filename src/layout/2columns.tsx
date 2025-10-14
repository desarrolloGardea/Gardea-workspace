
import '../styles/layout/2columns.css'


function TwoColumns({ children }: { children: React.ReactNode }){
    return (
        <div className="twocolumns">
            {children}
        </div>
    )
}
export default TwoColumns