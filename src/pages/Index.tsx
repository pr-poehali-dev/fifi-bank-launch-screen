import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showTelegramModal, setShowTelegramModal] = useState(true);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showPerryMessage, setShowPerryMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!showTelegramModal) {
        setShowPerryMessage(true);
        setTimeout(() => setShowPerryMessage(false), 3000);
      }
    }, 7000);
    return () => clearTimeout(timer);
  }, [showTelegramModal]);

  const handleLogoClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount === 2) {
      setShowDisclaimer(true);
      setClickCount(0);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(45deg, #FFE66D 0%, #4ECDC4 50%, #95E1D3 100%)',
      fontFamily: 'Open Sans, sans-serif'
    }}>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Coins */}
        <div className="absolute top-20 left-10 w-8 h-8 bg-pf-orange rounded-full animate-bounce-coin">
          💰
        </div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-pf-yellow rounded-full animate-float">
          🪙
        </div>
        <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-pf-teal rounded-full animate-pulse-glow">
          ⚡
        </div>
        
        {/* Gear Animation */}
        <div className="absolute top-16 right-16 text-4xl animate-spin">
          ⚙️
        </div>
        <div className="absolute bottom-20 right-10 text-3xl animate-spin" style={{ animationDuration: '3s' }}>
          🔧
        </div>
        
        {/* Lab Equipment */}
        <div className="absolute bottom-10 left-10 text-5xl animate-pulse">
          🧪
        </div>
        <div className="absolute top-1/2 left-5 text-3xl animate-wiggle">
          💡
        </div>
      </div>

      {/* Telegram Welcome Modal */}
      <Dialog open={showTelegramModal} onOpenChange={setShowTelegramModal}>
        <DialogContent className="max-w-md bg-white rounded-3xl border-4 border-pf-orange shadow-2xl">
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-bold text-pf-orange mb-4" style={{ fontFamily: 'Fredoka One' }}>
              🚀 Вступай в мем-клуб!
            </DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4">
            <div className="text-6xl animate-bounce">🏗️</div>
            <p className="text-gray-700 font-semibold">
              Секретные розыгрыши и мем-ивенты в нашем Telegram!
            </p>
            <div className="space-y-3">
              <Button 
                className="w-full bg-pf-orange hover:bg-orange-600 text-white font-bold py-3 rounded-2xl animate-pulse transform transition-transform hover:scale-105"
                onClick={() => window.open('https://t.me/+QgiLIa1gFRY4Y2Iy', '_blank')}
              >
                <Icon name="Send" className="mr-2" />
                Перейти в Telegram
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-2 border-pf-teal text-pf-teal hover:bg-pf-teal hover:text-white rounded-2xl"
                onClick={() => setShowTelegramModal(false)}
              >
                Не сейчас
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Telegram — твой пропуск к мем-наградам и эксклюзиву от FiFi Банка! 🎁
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Disclaimer Modal */}
      <Dialog open={showDisclaimer} onOpenChange={setShowDisclaimer}>
        <DialogContent className="max-w-lg bg-white rounded-3xl border-4 border-pf-blue shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-pf-orange flex items-center gap-2" style={{ fontFamily: 'Fredoka One' }}>
              <span className="text-2xl">🛡️</span>
              Главное — безопасность и мемы!
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-pf-yellow/20 p-4 rounded-2xl border-2 border-pf-yellow">
              <p className="text-gray-700">
                <strong>FiFiCoin</strong> — внутренняя фан-монета для челленджей, коллекционирования и мем-акций. 
                Не инвестиция и не средство накопления. Все покупки — только поддержка мем-проекта.
              </p>
            </div>
            <div className="flex gap-3">
              <Button 
                className="bg-pf-teal hover:bg-teal-600 text-white rounded-2xl"
                onClick={() => setShowDisclaimer(false)}
              >
                Понял! 👍
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-pf-orange text-pf-orange hover:bg-pf-orange hover:text-white rounded-2xl"
              >
                Подробнее
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Perry Message */}
      {showPerryMessage && (
        <div className="fixed bottom-4 right-4 bg-white p-4 rounded-2xl border-4 border-pf-teal shadow-lg animate-bounce z-50">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🦫</span>
            <p className="text-sm font-semibold text-gray-700">
              А не пора ли зайти в Telegram и поймать свой первый мем-бонус?
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        
        {/* Logo Section */}
        <div 
          className="text-center mb-8 cursor-pointer transform transition-transform hover:scale-105"
          onClick={handleLogoClick}
        >
          <h1 
            className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-2xl animate-pulse-glow"
            style={{ 
              fontFamily: 'Fredoka One',
              textShadow: '4px 4px 0px #FF6B35, 8px 8px 0px #4ECDC4'
            }}
          >
            ФиФи БАНК
          </h1>
          <div className="text-3xl animate-bounce-coin">💰🪙💎</div>
        </div>

        {/* Characters Section */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <div className="text-8xl animate-wiggle cursor-pointer transform transition-transform hover:scale-110">
            🏗️
          </div>
          <div className="text-6xl animate-float cursor-pointer transform transition-transform hover:scale-110">
            🔧
          </div>
          <div className="text-7xl animate-pulse cursor-pointer transform transition-transform hover:scale-110">
            🦫
          </div>
        </div>

        {/* Slogan */}
        <div className="text-center mb-8">
          <p 
            className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg"
            style={{ fontFamily: 'Fredoka One' }}
          >
            Приготовься — ты теперь мем-банкир! 🚀
          </p>
        </div>

        {/* Action Button */}
        <Button 
          className="bg-pf-orange hover:bg-orange-600 text-white font-bold py-4 px-8 text-xl rounded-3xl shadow-2xl transform transition-all duration-300 hover:scale-110 animate-pulse"
          style={{ fontFamily: 'Fredoka One' }}
        >
          <Icon name="Rocket" className="mr-2" />
          Начать крутое путешествие!
        </Button>

        {/* Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl">
          <Card className="bg-white/90 backdrop-blur-sm border-4 border-pf-orange rounded-3xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <CardHeader className="text-center">
              <div className="text-4xl mb-2 animate-bounce-coin">💰</div>
              <CardTitle className="text-pf-orange" style={{ fontFamily: 'Fredoka One' }}>
                Мем-Монеты
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-center">
                Собирай уникальные FiFiCoin и участвуй в мем-челленджах!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-4 border-pf-teal rounded-3xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <CardHeader className="text-center">
              <div className="text-4xl mb-2 animate-wiggle">🎯</div>
              <CardTitle className="text-pf-teal" style={{ fontFamily: 'Fredoka One' }}>
                Мем-Миссии
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-center">
                Выполняй задания от Финеса и получай крутые награды!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-4 border-pf-yellow rounded-3xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <CardHeader className="text-center">
              <div className="text-4xl mb-2 animate-float">🏆</div>
              <CardTitle className="text-orange-500" style={{ fontFamily: 'Fredoka One' }}>
                Мем-Турниры
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-center">
                Соревнуйся с друзьями в эпических мем-баттлах!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Easter Egg Info */}
        <div className="mt-8 text-center">
          <p className="text-white/70 text-sm">
            💡 Подсказка: кликни на лого несколько раз для сюрприза!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;