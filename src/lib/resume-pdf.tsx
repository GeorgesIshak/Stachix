import React from "react";
import { readFile } from "node:fs/promises";
import path from "node:path";
import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
  Image as PDFImage,
  renderToBuffer,
  Font,
} from "@react-pdf/renderer";
import { RESUME, type ResumeData, type ResumeEntry, type ResumeLang } from "@/data/resume";

const ACCENT = "#88a8cf";

// No automatic word hyphenation ("Com-ponents")
Font.registerHyphenationCallback((word) => [word]);

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 34,
    paddingHorizontal: 36,
    backgroundColor: "#ffffff",
    color: "#2f2f2f",
    fontFamily: "Helvetica",
    fontSize: 9,
    lineHeight: 1.45,
  },

  header: { flexDirection: "row", justifyContent: "space-between", gap: 18 },
  leftHeader: { flex: 1, paddingRight: 10 },
  rightHeader: { width: 95, alignItems: "flex-end" },
  photoWrap: { width: 90, height: 90, borderRadius: 45, overflow: "hidden", backgroundColor: "#a8c8ef" },
  photo: { width: "100%", height: "100%", objectFit: "cover" },

  name: { fontSize: 20, fontFamily: "Helvetica-Bold", letterSpacing: 1.2, color: "#2e2e2e" },
  role: { marginTop: 10, fontSize: 11, color: ACCENT, letterSpacing: 0.8 },

  contacts: { marginTop: 16, flexDirection: "row", flexWrap: "wrap", rowGap: 4 },
  contactLine: { width: "40%", fontSize: 9.2, lineHeight: 1.35, paddingRight: 6 },
  contactLineWide: { width: "60%" },
  bold: { fontFamily: "Helvetica-Bold" },
  link: { color: "#2f2f2f", textDecoration: "none" },

  section: { marginTop: 14 },
  // No letterSpacing here: ATS parsers read spaced capitals as separate letters ("W O R K")
  sectionTitle: { fontSize: 11.4, fontFamily: "Helvetica-Bold", textTransform: "uppercase" },
  divider: { marginTop: 6, height: 1, backgroundColor: "#8cb5e2", width: "100%" },

  paragraph: { marginTop: 7, fontSize: 9.8, lineHeight: 1.48, color: "#2d2d2d" },

  job: { marginTop: 11, flexDirection: "row", gap: 10 },
  jobDate: { width: 94, fontSize: 9.6, color: "#555555" },
  jobBody: { flex: 1 },
  jobTitle: { fontSize: 10.5, color: ACCENT, letterSpacing: 0.7 },
  company: { marginTop: 2, fontSize: 10.1, fontFamily: "Helvetica-Bold" },
  location: { fontFamily: "Helvetica", fontSize: 9.6 },
  meta: { marginTop: 2, fontSize: 9.6, lineHeight: 1.38, color: "#444444" },

  bullets: { marginTop: 5 },
  bulletRow: { flexDirection: "row", alignItems: "flex-start", gap: 6, marginBottom: 3 },
  bulletDot: { width: 8, fontSize: 10 },
  bulletText: { flex: 1, fontSize: 9.5, lineHeight: 1.36 },

  projectCard: { marginTop: 8 },
  projectTitle: { fontSize: 10.2, fontFamily: "Helvetica-Bold", color: "#2f2f2f", textDecoration: "none" },
  projectSubtitle: { fontSize: 9.2, color: ACCENT },

  skillBlock: { marginTop: 8 },
  skillTitle: { marginBottom: 2, fontSize: 10, fontFamily: "Helvetica-Bold", color: "#444444" },
  skillText: { fontSize: 9.6, lineHeight: 1.42 },
});

function SectionTitle({ title }: { title: string }) {
  return (
    <View style={styles.section} minPresenceAhead={40}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.divider} />
    </View>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <View style={styles.bullets}>
      {items.map((item, i) => (
        <View key={i} style={styles.bulletRow} wrap={false}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

function Entry({ entry }: { entry: ResumeEntry }) {
  return (
    <View style={styles.job}>
      <Text style={styles.jobDate}>{entry.date}</Text>
      <View style={styles.jobBody}>
        <Text style={styles.jobTitle}>{entry.title}</Text>
        <Text style={styles.company}>
          {entry.company}
          {entry.location && <Text style={styles.location}> – {entry.location}</Text>}
        </Text>
        {entry.subtitle && <Text style={styles.meta}>{entry.subtitle}</Text>}
        {entry.stack && <Text style={styles.meta}>{entry.stack}</Text>}
        <Bullets items={entry.bullets} />
      </View>
    </View>
  );
}

function ResumeDocument({ data, photoSrc }: { data: ResumeData; photoSrc: string }) {
  return (
    <Document title={`${data.name} – CV`} author={data.name}>
      <Page size="A4" style={styles.page}>
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.leftHeader}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.role}>{data.role}</Text>

            <View style={styles.contacts}>
              {data.contacts.map(({ label, value, href }, i) => (
                <Text
                  key={label}
                  style={
                    i === data.contacts.length - 1 && i % 2 === 0
                      ? [styles.contactLine, { width: "100%" }] // odd one out spans the full row
                      : i % 2
                        ? [styles.contactLine, styles.contactLineWide]
                        : styles.contactLine
                  }
                >
                  <Text style={styles.bold}>{label}: </Text>
                  {href ? (
                    <Link src={href} style={styles.link}>
                      {value}
                    </Link>
                  ) : (
                    value
                  )}
                </Text>
              ))}
            </View>
          </View>

          <View style={styles.rightHeader}>
            <View style={styles.photoWrap}>
              <PDFImage src={photoSrc} style={styles.photo} />
            </View>
          </View>
        </View>

        {/* PROFILE */}
        <SectionTitle title={data.labels.profile} />
        {data.profile.map((p, i) => (
          <Text key={i} style={styles.paragraph}>
            {p}
          </Text>
        ))}

        {/* WORK */}
        <SectionTitle title={data.labels.work} />
        {data.workHistory.map((job, i) => (
          <Entry key={i} entry={job} />
        ))}

        {/* PROJECTS */}
        <SectionTitle title={data.labels.projects} />
        {data.projects.map((p) => (
          <View key={p.title} style={styles.projectCard} wrap={false}>
            <Text>
              <Link src={p.link} style={styles.projectTitle}>
                {p.title}
              </Link>
              <Text style={styles.projectSubtitle}>  ·  {p.subtitle}</Text>
            </Text>
            <Text style={styles.meta}>{p.description}</Text>
          </View>
        ))}

        {/* INTERNSHIPS */}
        <SectionTitle title={data.labels.internships} />
        {data.internships.map((job, i) => (
          <Entry key={i} entry={job} />
        ))}

        {/* EDUCATION */}
        <SectionTitle title={data.labels.education} />
        {data.education.map((item, i) => (
          <View key={i} style={styles.job} wrap={false}>
            <Text style={styles.jobDate}>{item.date}</Text>
            <View style={styles.jobBody}>
              <Text style={styles.company}>{item.title}</Text>
              <Text style={styles.meta}>
                {item.place}
                {item.location ? ` – ${item.location}` : ""}
              </Text>
              {item.note && <Text style={styles.meta}>{item.note}</Text>}
            </View>
          </View>
        ))}

        {/* SKILLS */}
        <SectionTitle title={data.labels.skills} />
        {data.technicalSkills.map((skill) => (
          <View key={skill.title} style={styles.skillBlock} wrap={false}>
            <Text style={styles.skillTitle}>{skill.title}</Text>
            <Text style={styles.skillText}>{skill.items}</Text>
          </View>
        ))}

        {/* LANGUAGES */}
        <SectionTitle title={data.labels.languages} />
        <Bullets items={data.languages} />
      </Page>
    </Document>
  );
}

/** Renders the CV to a PDF buffer. The photo is read from /public on disk (no network request). */
export async function renderResumePdf(lang: ResumeLang) {
  const data = RESUME[lang];
  const photo = await readFile(path.join(process.cwd(), "public", data.profileImage));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;
  return renderToBuffer(<ResumeDocument data={data} photoSrc={photoSrc} />);
}
