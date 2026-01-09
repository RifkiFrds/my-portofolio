import { Card, CardHeader, CardTitle, CardContent } from "../lightswind/card";
import ProfessionalProfile from "./SkillCategory";
import { motion } from "framer-motion";

export const EducationSection = () => {
  return (
    <motion.section
      id="education"
      className="space-y-10 py-10 px-6"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div>
        <motion.h3
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Education
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* SMK */}
          <Card>
            <CardHeader>
              <CardTitle>
                Vocational High School – Computer and Network Engineering
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                SMK Excellent 1 Tangerang | 2021 – 2024
              </p>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Focused on Computer and Network Engineering with hands-on
                experience in web development, network configuration, and system
                troubleshooting through practical learning and competitions.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Web Technology Student Competition (Kota Tangerang),
                  Kemendikbudristek
                </li>
                <li>
                  Highest competency exam score in the graduating class
                  (web development and MikroTik network configuration)
                </li>
                <li>Telkom Mobile Development Bootcamp (Dart)</li>
                <li>Junior Network Administrator certification</li>
              </ul>
            </CardContent>
          </Card>

          {/* University */}
          <Card>
            <CardHeader>
              <CardTitle>Bachelor’s Degree in Informatics Engineering</CardTitle>
              <p className="text-sm text-muted-foreground">
                University of Muhammadiyah Tangerang | 2024 – Present
              </p>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Focused on web development and software fundamentals, complemented
                by certified industry programs and real organizational projects.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Dicoding x Indosat Ooredoo Hutchison (IDCamp) Scholarship –
                  Advanced level
                </li>
                <li>Junior Web Developer training (BNSP KOMDIGI)</li>
                <li>
                  Developed the official website of HIMTI (Campus Student
                  Organization)
                </li>
                <li>
                  Youth Technology Innovation Ambassador – Kota Tangerang
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <ProfessionalProfile />
    </motion.section>
  );
};
