import CapBeltYellow from './assets/caps/belt-yellow.svg'
import DepartmentCard from './components/Cards/DepartmentCard'
import { departments } from './data/departments'

const DepartmentBrochure = () => {
    return (
        <section id="section-5">
            <Margin>
                <section className="department-container">
                    <div className="department-title">
                        <img src={CapBeltYellow} alt="Icono de flecha hacia adelante" />
                        <h4>Departamentos</h4>
                    </div>
                    <div className="department-cards-wrapper">
                        {departments.map((dept, index) => (
                            <div className="card-cap-wrapper" key={index}>
                                <DepartmentCard
                                    name={dept.name}
                                    description={dept.description}
                                    leader={dept.leader}
                                    img={dept.img}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </Margin>
        </section>
    )
}
