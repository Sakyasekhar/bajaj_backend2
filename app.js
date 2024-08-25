import express from "express";
import cors from "cors";
const app = express();


app.use(express.json());
app.use(cors());


const user_id = "Sakya_Sekhar_Gangarapu_26032003";
const college_email = "sekhar.21bce9026@vitapstudent.ac.in";
const college_roll_number = "21BCE9026";

app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;

        // Separate numbers and alphabets
        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => isNaN(item));

        // Find the highest lowercase alphabet
        const highest_lowercase_alphabet = alphabets.filter(c => c === c.toLowerCase()).sort().pop();

        const response = {
            is_success: true,
            user_id: user_id,
            email: college_email,
            roll_number: college_roll_number,
            numbers: numbers,
            alphabets: alphabets,
            highest_lowercase_alphabet: [highest_lowercase_alphabet]
        };

        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ is_success: false, message: error.message });
    }
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
