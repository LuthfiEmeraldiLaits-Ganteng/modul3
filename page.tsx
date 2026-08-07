"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  Home, 
  Calendar, 
  GraduationCap, 
  CheckSquare, 
  Archive, 
  Settings, 
  Plus, 
  Folder,
  BookOpen,
  X
} from "lucide-react";

export default function GoogleClassroomPage() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [activeMenu, setActiveMenu] = useState<string>("Kelas");

  // Contoh daftar kelas yang terdaftar
  const enrolledClasses = [
    { id: 1, name: "Pemrograman Web (PPLG)", teacher: "Pak Guru", color: "bg-emerald-600" },
    { id: 2, name: "Bahasa Indonesia X", teacher: "Bu Guru", color: "bg-indigo-600" },
    { id: 3, name: "Sejarah Nasional", teacher: "Pak Ahmad", color: "bg-amber-600" },
  ];

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
      
      {/* --- SIDEBAR GOOGLE CLASSROOM --- */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 bg-slate-900 border-r border-slate-800 flex flex-col transition-all duration-300 md:relative ${
          isOpen ? "w-72" : "w-16"
        }`}
      >
        {/* Header Sidebar (Toggle Menu) */}
        <div className="h-16 flex items-center px-4 gap-4 border-b border-slate-800/60">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-white hover:bg-slate-800 rounded-full"
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          {isOpen && (
            <div className="flex items-center gap-2 font-semibold text-lg text-slate-100">
              <GraduationCap className="w-6 h-6 text-emerald-400" />
              <span>Classroom</span>
            </div>
          )}
        </div>

        {/* Menu Items Container */}
        <div className="flex-1 overflow-y-auto p-2 space-y-4">
          
          {/* Main Navigation */}
          <div className="space-y-1">
            <Button
              variant={activeMenu === "Kelas" ? "secondary" : "ghost"}
              onClick={() => setActiveMenu("Kelas")}
              className={`w-full justify-start gap-4 rounded-r-full font-medium ${
                !isOpen && "px-2 justify-center"
              } ${activeMenu === "Kelas" ? "bg-emerald-950/60 text-emerald-400 hover:bg-emerald-900/50" : "text-slate-300 hover:bg-slate-800/60"}`}
            >
              <Home className="w-5 h-5 min-w-[20px]" />
              {isOpen && <span>Kelas</span>}
            </Button>

            <Button
              variant={activeMenu === "Kalender" ? "secondary" : "ghost"}
              onClick={() => setActiveMenu("Kalender")}
              className={`w-full justify-start gap-4 rounded-r-full font-medium ${
                !isOpen && "px-2 justify-center"
              } ${activeMenu === "Kalender" ? "bg-emerald-950/60 text-emerald-400 hover:bg-emerald-900/50" : "text-slate-300 hover:bg-slate-800/60"}`}
            >
              <Calendar className="w-5 h-5 min-w-[20px]" />
              {isOpen && <span>Kalender</span>}
            </Button>
          </div>

          <hr className="border-slate-800/80 my-2" />

          {/* Section: Mengajar / Terdaftar */}
          <div className="space-y-1">
            {isOpen && (
              <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Terdaftar
              </p>
            )}

            <Button
              variant={activeMenu === "Untuk Dikerjakan" ? "secondary" : "ghost"}
              onClick={() => setActiveMenu("Untuk Dikerjakan")}
              className={`w-full justify-start gap-4 rounded-r-full font-medium ${
                !isOpen && "px-2 justify-center"
              } ${activeMenu === "Untuk Dikerjakan" ? "bg-emerald-950/60 text-emerald-400 hover:bg-emerald-900/50" : "text-slate-300 hover:bg-slate-800/60"}`}
            >
              <CheckSquare className="w-5 h-5 min-w-[20px]" />
              {isOpen && <span>Untuk Dikerjakan</span>}
            </Button>

            {/* List Kelas yang Diikuti */}
            {enrolledClasses.map((cls) => (
              <Button
                key={cls.id}
                variant={activeMenu === cls.name ? "secondary" : "ghost"}
                onClick={() => setActiveMenu(cls.name)}
                className={`w-full justify-start gap-4 rounded-r-full font-medium text-xs ${
                  !isOpen && "px-2 justify-center"
                } ${activeMenu === cls.name ? "bg-emerald-950/60 text-emerald-400 hover:bg-emerald-900/50" : "text-slate-400 hover:bg-slate-800/60"}`}
              >
                <div className={`w-3 h-3 rounded-full ${cls.color} min-w-[12px]`} />
                {isOpen && <span className="truncate">{cls.name}</span>}
              </Button>
            ))}
          </div>

          <hr className="border-slate-800/80 my-2" />

          {/* Section Footer Menu */}
          <div className="space-y-1">
            <Button
              variant={activeMenu === "Kelas Diarsipkan" ? "secondary" : "ghost"}
              onClick={() => setActiveMenu("Kelas Diarsipkan")}
              className={`w-full justify-start gap-4 rounded-r-full font-medium ${
                !isOpen && "px-2 justify-center"
              } ${activeMenu === "Kelas Diarsipkan" ? "bg-emerald-950/60 text-emerald-400 hover:bg-emerald-900/50" : "text-slate-300 hover:bg-slate-800/60"}`}
            >
              <Archive className="w-5 h-5 min-w-[20px]" />
              {isOpen && <span>Kelas Diarsipkan</span>}
            </Button>

            <Button
              variant={activeMenu === "Setelan" ? "secondary" : "ghost"}
              onClick={() => setActiveMenu("Setelan")}
              className={`w-full justify-start gap-4 rounded-r-full font-medium ${
                !isOpen && "px-2 justify-center"
              } ${activeMenu === "Setelan" ? "bg-emerald-950/60 text-emerald-400 hover:bg-emerald-900/50" : "text-slate-300 hover:bg-slate-800/60"}`}
            >
              <Settings className="w-5 h-5 min-w-[20px]" />
              {isOpen && <span>Setelan</span>}
            </Button>
          </div>

        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-slate-950">
        
        {/* Top Navbar */}
        <header className="h-16 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-slate-100">
              {activeMenu}
            </h2>
          </div>

          {/* Tombol Buat / Gabung Kelas (+) */}
          <div className="flex items-center gap-3">
            <Button className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-full gap-2">
              <Plus className="w-4 h-4" />
              <span>Buat atau Gabung Kelas</span>
            </Button>
          </div>
        </header>

        {/* Content Body */}
        <main className="p-8">
          {activeMenu === "Kelas" ? (
            /* Grid Card Kelas */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledClasses.map((cls) => (
                <div key={cls.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all shadow-lg flex flex-col justify-between h-52">
                  <div className={`${cls.color} p-5 space-y-1`}>
                    <h3 className="font-bold text-lg text-white truncate">{cls.name}</h3>
                    <p className="text-xs text-slate-200">{cls.teacher}</p>
                  </div>
                  <div className="p-4 flex items-center justify-end gap-2 border-t border-slate-800/80">
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                      <BookOpen className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                      <Folder className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Halaman Menu Lain */
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-md">
              <h1 className="text-2xl font-bold text-emerald-400 mb-2">{activeMenu}</h1>
              <p className="text-slate-400 text-sm">
                Kamu sedang berada di halaman menu <span className="text-slate-200 font-semibold">{activeMenu}</span>.
              </p>
            </div>
          )}
        </main>

      </div>

    </div>
  );
}