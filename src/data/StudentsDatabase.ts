import { StudentModel } from "../model/StudentModel";
import { BaseDatabase } from "./BaseDatabase";

export class StudentDatabase extends BaseDatabase{
    public async getAll(){
        try {
            const result = await BaseDatabase.connection("alunos").select("*")
            return result
        } catch (error) {
            throw new Error("Error inesperado")
        }
    }
    public async insert(student: StudentModel){
        try {
            await BaseDatabase.connection("alunos")
            .insert({
                id: student.getId(),
                nome: student.getNome(),
                status: student.getStatus(),
                turma: student.getTurma()
            })
        } catch (error) {
            throw new Error("Error inesperado")
        }
    }
}