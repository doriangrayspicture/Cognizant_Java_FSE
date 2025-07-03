public class EmployeeDao {
    public Integer addEmployee(Employee emp) {
        Session session = factory.openSession();
        Transaction tx = null;
        Integer id = null;
        try {
            tx = session.beginTransaction();
            id = (Integer) session.save(emp);
            tx.commit();
        } catch (Exception e) {
            if (tx != null) tx.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
        return id;
    }
}
