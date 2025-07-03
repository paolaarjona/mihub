
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut, Settings, Edit, Save, X } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import TimelineSection from '@/components/TimelineSection';
import PartnersSection from '@/components/PartnersSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import CorporateEventsCalendar from '@/components/CorporateEventsCalendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import EventsList from '@/components/admin/EventsList';
import CreateEventDialog from '@/components/admin/CreateEventDialog';

const Admin = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [showEventManagement, setShowEventManagement] = useState(false);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [refreshEvents, setRefreshEvents] = useState(0);

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate('/auth');
    }
  }, [user, isAdmin, loading, navigate]);

  const handleEventCreated = () => {
    setRefreshEvents(prev => prev + 1);
    setShowCreateDialog(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Admin Controls Bar */}
      <div className="sticky top-0 z-50 bg-gray-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              MODO ADMINISTRADOR
            </Badge>
            <span className="text-sm">Panel de Gestión Visual</span>
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => setEditMode(!editMode)}
              variant={editMode ? "default" : "outline"}
              size="sm"
              className={editMode ? "bg-green-600 hover:bg-green-700" : ""}
            >
              {editMode ? (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Guardar Cambios
                </>
              ) : (
                <>
                  <Edit className="h-4 w-4 mr-2" />
                  Modo Edición
                </>
              )}
            </Button>
            <Button
              onClick={() => setShowEventManagement(!showEventManagement)}
              variant={showEventManagement ? "default" : "outline"}
              size="sm"
            >
              <Settings className="h-4 w-4 mr-2" />
              Gestión Eventos
            </Button>
            <span className="text-xs text-gray-300">
              {user.email}
            </span>
            <Button onClick={signOut} variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </div>

      {/* Event Management Panel (Collapsible) */}
      {showEventManagement && (
        <div className="bg-gray-50 dark:bg-gray-900 border-b">
          <div className="container mx-auto px-4 py-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Gestión de Eventos
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button onClick={() => setShowCreateDialog(true)}>
                      Nuevo Evento
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setShowEventManagement(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <EventsList 
                  key={refreshEvents} 
                  onEventUpdated={() => setRefreshEvents(prev => prev + 1)} 
                />
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Main Website Content - Editable Version */}
      <div className={`${editMode ? 'admin-edit-mode' : ''}`}>
        {/* Navigation */}
        <div className="relative">
          {editMode && (
            <div className="absolute top-2 right-2 z-10 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-medium">
              EDITANDO: Navegación
            </div>
          )}
          <Navbar />
        </div>

        {/* Hero Section */}
        <div className="relative">
          {editMode && (
            <div className="absolute top-4 right-4 z-10 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-medium">
              EDITANDO: Sección Principal
            </div>
          )}
          <HeroSection />
        </div>

        {/* Timeline Section */}
        <div className="relative">
          {editMode && (
            <div className="absolute top-4 right-4 z-10 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-medium">
              EDITANDO: Línea de Tiempo
            </div>
          )}
          <TimelineSection />
        </div>

        {/* Corporate Events Calendar */}
        <div className="section bg-muted/50 relative">
          {editMode && (
            <div className="absolute top-4 right-4 z-10 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-medium">
              EDITANDO: Calendario de Eventos
            </div>
          )}
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Eventos Corporativos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Calendario de Eventos 2025
              </h2>
              <p className="text-muted-foreground">
                Descubre y participa en nuestros eventos especializados en innovación y tecnología.
              </p>
            </div>
            <CorporateEventsCalendar />
          </div>
        </div>

        {/* Partners Section */}
        <div className="relative">
          {editMode && (
            <div className="absolute top-4 right-4 z-10 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-medium">
              EDITANDO: Socios y Colaboradores
            </div>
          )}
          <PartnersSection />
        </div>

        {/* Testimonials Section */}
        <div className="relative">
          {editMode && (
            <div className="absolute top-4 right-4 z-10 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-medium">
              EDITANDO: Testimonios
            </div>
          )}
          <TestimonialsSection />
        </div>

        {/* Footer */}
        <div className="relative">
          {editMode && (
            <div className="absolute top-4 right-4 z-10 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-medium">
              EDITANDO: Footer
            </div>
          )}
          <Footer />
        </div>
      </div>

      {/* Create Event Dialog */}
      <CreateEventDialog
        open={showCreateDialog}
        onOpenChange={setShowCreateDialog}
        onEventCreated={handleEventCreated}
      />

      {/* Admin Styles */}
      <style>{`
        .admin-edit-mode .relative:hover {
          outline: 2px dashed #fbbf24;
          background-color: rgba(251, 191, 36, 0.05);
        }
        .admin-edit-mode .relative {
          transition: all 0.2s ease;
        }
      `}</style>
    </div>
  );
};

export default Admin;
